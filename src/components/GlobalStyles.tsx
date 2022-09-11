import { colors } from './ui/tokens/colors';

const GlobalStyles = () => {
  return (
    <style jsx global>{`
      * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
      }

      :root {
        --primary-color: #040505;
        --secondary-color: #fdf8fd;
        --background-color: rgba(41, 48, 52);
        --border-color-primary: #3c3f44;
        --box-shadow-color: #131517;
        --green: rgb(07, 235, 07);
        --grey-2: #252525;
        --grey-5: #8c8c8c;

        --space-xxs: 2px;
        --space-xs: 4px;
        --space-s: 8px;
        --space-m: 12px;
        --space-l: 16px;
        --space-xl: 20px;
        --space-xxl: 32px;

        --radii-xs: 4px;
        --radii-s: 8px;
        --radii-m: 16px;
        --radii-50: 50%;
      }

      body {
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto',
          'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans',
          'Helvetica Neue', sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        background-color: ${colors.bg};
        color: ${colors.secondary};
      }
    `}</style>
  );
};
export { GlobalStyles };
