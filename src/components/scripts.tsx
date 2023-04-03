import * as React from "react";

import Script from "next/script";
import { client } from "@/components/cms";

class Scripts extends React.Component {
    render() {
        return (
            <div>
                <Script
                    data-ad-client="ca-pub-6599086733747900"
                    async
                    src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"
                />
                <Script
                    async
                    src="https://www.googletagmanager.com/gtag/js?id=UA-109825194-2"
                />
                <Script
                    id="GoogleAnalytics"
                    dangerouslySetInnerHTML={{
                        __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());

              gtag('config', 'UA-109825194-2');
              `,
                    }}
                />
            </div>
        );
    }
}

export default Scripts;
