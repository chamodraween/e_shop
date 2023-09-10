import React, { useEffect } from 'react';

function TawToChat() {
    useEffect(() => {
        // Create the Tawk.to script element
        const tawkScript = document.createElement("script");
        tawkScript.async = true;
        tawkScript.src = 'https://embed.tawk.to/64fcbca4a91e863a5c129933/1h9tk1p1f';
        tawkScript.charset = 'UTF-8';
        tawkScript.setAttribute('crossorigin', '*');

        // Append the script to the body of the document
        document.body.appendChild(tawkScript);

        // Cleanup when the component unmounts
        return () => {
            document.body.removeChild(tawkScript);
        };
    }, []);

    return (
        // Your JSX content here
        <div>
            {/* Your component content */}
        </div>
    );
}

export default TawToChat;
