import Head from 'next/head';

export default (props) => (
    <div className='container page'>
        {props.title ? <Head>
            <title>{props.title || null}</title>
        </Head> : null}
        <div className='columns'>
            <div>
                {props.children}
            </div>
        </div>




    </div>
);







        <style jsx>
            {`
        .container {
            background-color: brown;
            height: 100vh;
        }

    `}
        </style>