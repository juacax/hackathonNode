import sendMail from '../../helpers/email.helper.js';

const main = async (email, recoverPassCode) =>{
        const emailBody = `
        Se ha solicitado la recuperación de contraseña para este email. 
                    
        Utiliza el siguiente código para crear una nueva contraseña: ${recoverPassCode}

        Si no has sido tú ignora este email.
        `;
        const emailSubject = `Recuperación de contraseña`;

        await sendMail(email,emailSubject,emailBody);
}

export default main;