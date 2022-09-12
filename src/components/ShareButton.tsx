import { Icon } from './ui/Icon';
import { colors } from './ui/tokens/colors';
import { radii } from './ui/tokens/radii';

const getMessage =
  () => `Checkout the list of countries you can travel to without VISA for Uganda passport holders.

${window.location.origin}
`;

const ShareButton = () => {
  const handleShare = async () => {
    const message = getMessage();
    try {
      if (navigator.canShare?.({ text: message })) {
        await navigator.share({ text: message });
      } else {
        await navigator.clipboard.writeText(message);
        alert('Message copied to clipboard');
      }
    } catch (error) {
      // AbortError is thrown when someone cancels a share
      if (error instanceof Error && error.name !== 'AbortError') {
        alert('An error occurred when sharing message');
        // TODO: report this to sentry
      }
    }
  };
  return (
    <>
      <button onClick={handleShare}>
        <Icon iconName='share' />
      </button>
      <style jsx>{`
        button {
          width: 50px;
          height: 50px;
          border-radius: ${radii.round};
          position: fixed;
          right: 20px;
          bottom: 20px;
          background-color: ${colors.green};
          color: white;
          border: none;
          box-shadow: 3px 3px 2px ${colors.boxShadow};
        }
      `}</style>
    </>
  );
};

export { ShareButton };
