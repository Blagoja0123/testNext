import nodemailer from 'nodemailer'


export async function sendLoginEmail({email, url, token}: {
    email: string;
    url: string;
    token: string;
}){
    
    const testAccount = await nodemailer.createTestAccount();

    const transporter = nodemailer.createTransport({
        host: "smtp.ethereal.email",
        port: 587,
        secure: false,
        auth: {
            user: testAccount.user,
            pass: testAccount.pass
        }
    })

    const info = await transporter.sendMail({
        from: '"John Doe" <j.doe@example.com>',
        to: email,
        subject: 'testing',
        html: `login by clicking <a href="${url}/login#token=${token}">HERE</a>`
    })
    let temp: any = nodemailer.getTestMessageUrl(info);
    console.log(temp);
}