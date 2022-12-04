import { Buku } from '../components/Buku';

function Landing(isLogin, setIsLogin) {
  return (
    <>
      <Buku isLogin ={isLogin} setIdlogin={setIsLogin} />
    </>
  );
}

export default Landing;
