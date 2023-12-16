import Layout from '../components/layout.js';
import Post from '../components/post.js';
import styles from '../styles/grid.module.css';

export default function Blog({posts}) {
    return (
        <Layout title='Blog'>
            <main className='contenedor'>
                <h1 className='heading'>Blog</h1>
                <div className={styles.grid}>
                    {posts.map((post) => (
                        <Post 
                            key={post.id}
                            post={post.attributes}
                        />
                    ))}
                </div>
            </main>
        </Layout>
    );
};

export async function getStaticProps() {
    const respueta = await fetch(`${process.env.API_URL}/posts?populate=imagen`);
    const {data: posts} = await respueta.json();
    
    return {
        props: {
            posts
        }
    }
}
