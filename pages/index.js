import Head from 'next/head'
import AddToHome from '../src/components/AddToHome'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <meta charset='utf-8' />
        <meta http-equiv='X-UA-Compatible' content='IE=edge' />
        <meta name='viewport' content='width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no' />
        <meta name='description' content='Description' />
        <meta name='keywords' content='Keywords' />
        <title>Next.js PWA Example</title>

        <link rel="manifest" href="/manifest.json" />
        <link href='/favicon-16x16.png' rel='icon' type='image/png' sizes='16x16' />
        <link href='/favicon-32x32.png' rel='icon' type='image/png' sizes='32x32' />
        <link rel="apple-touch-icon" href="/apple-icon.png"></link>
        <meta name="theme-color" content="#317EFB" />
      </Head>


      <h1>Meu aplicativo PWA</h1>
      <AddToHome />

      <style jsx>{`
      .container {
        width: 100%;
        height: 100%;

        display: flex;
        flex-direction: column;
        
        justify-content: space-between; /* align items in Main Axis */
        align-items: stretch; /* align items in Cross Axis */
        align-content: stretch; /* Extra space in Cross Axis */
                
        background: #ccc;
      }

      h1 {
        margin: 0px;
        border: 0px; 
        color: #000
      }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  )
}
