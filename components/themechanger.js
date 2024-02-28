import { useTheme } from 'next-themes'

export default function Themechanger()
{
  const { theme, setTheme } = useTheme()

  return (
    <div>
      <a onClick={() => {theme == 'light' ? setTheme('dark') : setTheme('light')}}>toggle site theme</a>
    </div>
  );
}