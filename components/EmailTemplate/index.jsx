
export const EmailTemplate = ({
  name, email, message 
}) => (
  <div>
    <h1>Email from, {name} - {email}!</h1>
    <p>{message}</p>
  </div>
);
