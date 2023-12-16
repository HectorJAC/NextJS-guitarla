import Layout from '../components/layout.js';
import Guitarra from '../components/guitarra.js';
import styles from '../styles/grid.module.css';

export default function Tienda({guitarras}) {
    return (
        <Layout title='tienda'>
            <main className='contenedor'> 
                <h2>Nuestra Coleccion</h2>

                <div className={styles.grid}>
                    {guitarras.map((guitarra) => (
                        <Guitarra 
                            key={guitarra.id}       
                            guitarra={guitarra.attributes}
                        />
                    ))}
                </div>
            </main>
        </Layout>
    );
};

// export async function getStaticProps() {
//     const respueta = await fetch(`${process.env.API_URL}/guitarras?populate=imagen`);
//     const {data: guitarras} = await respueta.json();
    
//     return {
//         props: {
//             guitarras
//         }
//     }
// }

export async function getServerSideProps() {
    const respueta = await fetch(`${process.env.API_URL}/guitarras?populate=imagen`);
    const {data: guitarras} = await respueta.json();
    
    return {
        props: {
            guitarras
        }
    }
}
