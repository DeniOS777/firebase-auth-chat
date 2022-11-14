import { Router } from './router/Router';

export const App = () => {
  return (
    <div
      style={{
        margin: '0 auto',
        maxWidth: '1200px',
        paddingLeft: '16px',
        paddingRight: '16px',
        paddingTop: '16px',
        paddingBottom: '32px',
      }}
    >
      <Router />
    </div>
  );
};
