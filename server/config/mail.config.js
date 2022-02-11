
import Mailgun from "mailgun-js";

 function initializeMailgun(){
    return Mailgun({
        apiKey:'2de261e19b500a2c73a4161467fe18b6-d2cc48bc-928bcb8a',
        domain:'sandbox8b36acb6dd8c412db23e648a60bb61b8.mailgun.org'
    });
}
export default initializeMailgun;