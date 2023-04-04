import * as React from "react";

import Script from "next/script";
import { client } from "@/components/cms";

class Scripts extends React.Component {
    render() {
        return (
            <div>
                <Script
                    data-ad-client="ca-pub-6599086733747900"
                    src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"
                    strategy="beforeInteractive"
                    async={true}
                />
                <Script
                    src="https://www.googletagmanager.com/gtag/js?id=G-VRQ57TN816"
                    strategy="beforeInteractive"
                    async={true}
                />
                <Script id="GoogleAnalytics"
                    dangerouslySetInnerHTML={{
                        __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());

              gtag('config', 'G-VRQ57TN816');
              `,
                    }}
                />
            </div>
        );
    }
}

export default Scripts;
