import Layout from '../../components/layout';
import Image from 'next/image';
import Link from 'next/link';
import { formatearFecha } from '../../utils/helpers';
import styles from '../../styles/blog.module.css';

export default function Post({post}) {
    
    const {titulo, contenido, imagen, publishedAt} = post[0].attributes;

    return (
        <Layout
            title={`Blog - ${titulo}`}
        >
            <article className={`${styles.post} ${styles['mt-3']}`}>
                <Image 
                    src={imagen.data.attributes.url} 
                    width={1000} 
                    height={800} 
                    alt={`Imagen blog ${titulo}`} 
                />

                <div className={styles.contenido}>
                    <h3>{titulo}</h3>
                    <p className={styles.fecha}>{formatearFecha(publishedAt)}</p>
                    <p className={styles.resumen}>{contenido}</p>
                    <Link href='/blog'>
                        <a className={styles.enlace}>
                            Volver a Blogs
                        </a>
                    </Link>
                </div>
            </article>
        </Layout>
    );
};

export async function getServerSideProps({query: {url}}) {
    const respueta = await fetch(`${process.env.API_URL}/posts?filters[url]=${url}&populate=imagen`);
    const {data: post} = await respueta.json();
    
    return {
        props: {
            post
        }
    }
};
