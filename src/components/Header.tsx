import logo from '../assets/Taskly.png';

export default function Header() {
  return (
    <header style={{
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
    }}>
      <h1>Taskly</h1>
      <img src={logo} alt="Logo" style={{ height: '150px' }} />
    </header>
  );
}