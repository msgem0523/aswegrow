import RegistrationForm from '../components/gmsc/RegistrationForm';
import QRCodeDisplay from '../components/gmsc/QRCodeDisplay';

const Garden = () => {
  return (
    <div>
      <h1>Garden Mustard Seed Crew</h1>
      <p>Welcome to our youth garden initiative!</p>
      <RegistrationForm />
      <QRCodeDisplay url="https://aswegrow.vercel.app" />
    </div>
  );
};

export default Garden;
