import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const { name, email, message } = await request.json();

    // Validação básica
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Por favor, preencha todos os campos." },
        { status: 400 }
      );
    }

    // Envia para o Web3Forms
    const web3formsResponse = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        access_key: process.env.WEB3FORMS_KEY,
        subject: `Nova mensagem de ${name}`,
        from_name: name,
        email: email,
        message: message,
        to_email: "cauapestana74@gmail.com",
      }),
    });

    // Sucesso
    if (web3formsResponse.ok) {
      return NextResponse.json({ success: true });
    }

    // Erro do Web3Forms
    const errorData = await web3formsResponse.json();
    return NextResponse.json(
      { error: errorData.message || "Erro ao enviar email" },
      { status: 500 }
    );

  } catch (error: any) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      { error: error.message || "Erro interno do servidor" },
      { status: 500 }
    );
  }
}
