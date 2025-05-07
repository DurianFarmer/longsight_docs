import { useEffect } from 'react';
import { useHistory } from '@docusaurus/router';

export default function Home() {
  const history = useHistory();

  useEffect(() => {
    history.push('/docs/welcome-to-longsight');  // Redirect to your desired page
  }, [history]);

  return null;  // Return null as we are redirecting
}