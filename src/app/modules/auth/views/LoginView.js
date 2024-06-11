import LoginForm from "../components/LoginForm";
import "../assets/style.css";
export default function LoginView() {
  return (
    <>
      <main className="login-page bg-no-repeat bg-center grid min-h-full px-6">
        <div>
          <LoginForm />
        </div>
      </main>
    </>
  );
}
