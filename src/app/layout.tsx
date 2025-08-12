import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";

export const metadata: Metadata = {
  title: "Dazzle Wheels - Best Luxury Cars For Rent In Dubai",
  description: "Dazzle Wheels offers the best luxury car rentals in Dubai, providing an exclusive fleet of high-end vehicles for an unforgettable driving experience. Rent top-tier cars for business, leisure, or special occasions.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
          {/* Meta tags */}
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1"
        />
        <link rel="icon" href="/img/128x128-b.png" />

        {/* <link rel="icon" href="/img/favIcons/16x16.png" sizes="16x16" style={{objectFit:'cover'}}/>
        <link rel="icon" href="/img/favIcons/32x32.png" sizes="32x32" style={{objectFit:'cover'}}/>
        <link rel="icon" href="/img/favIcons/48x48.png" sizes="48x48" style={{objectFit:'cover'}}/>
        <link rel="icon" href="/img/favIcons/64x64.png" sizes="64x64" style={{objectFit:'cover'}}/>
        <link rel="icon" href="/img/favIcons/128x128.png" sizes="128x128.png" style={{objectFit:'cover'}}/>
        <link rel="apple-touch-icon" href="/img/favIcons/180x180.png" style={{objectFit:'cover'}}/>
        <link rel="icon" type="image/png" sizes="192x192" href="/img/favIcons/192x192.png" style={{objectFit:'cover'}}/> */}

        {/* Styles */}
         <link rel="stylesheet" href="/css/plugins/bootstrap.min.css"/>
         <link rel="stylesheet" href="/css/plugins/font-awesome-pro.css"/>
         <link rel="stylesheet" href="/css/plugins/flaticon.css"/>
         <link rel="stylesheet" href="/css/plugins/omFont.css"/>
  
          <link
          href="https://fonts.googleapis.com/css2?family=Jost:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Poppins&display=swap"
          rel="stylesheet"
        />

        
      </head>
      <body>
        {children}

        <Script src="/js/popper.min.js" strategy="afterInteractive" />
        <Script src="/js/bootstrap.min.js" strategy="afterInteractive" />


        
      </body>
    </html>
  );
}
