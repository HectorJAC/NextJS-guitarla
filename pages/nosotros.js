import Image from "next/future/image";
import Layout from '../components/layout.js';
import styles from '../styles/nosotros.module.css';

export default function Nosotros() {
    return (
        <Layout title='Nosotros'>
            <main className="contenedor">
            <h2 className='heading'>Nosotros</h2>
                <div className={styles.contenido}>
                    <Image src='/img/nosotros.jpg' width={800} height={600} alt="nosotros"/>
                    <div>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque interdum, ligula eu malesuada elementum, sem ex gravida magna, sit amet volutpat lorem turpis vel ligula. Nulla lobortis est et lorem fermentum, eget congue nibh semper. Integer non nisl id ante molestie maximus. Proin accumsan turpis odio, ut lacinia risus elementum eu. Etiam varius vel tellus non viverra. Aenean sit amet mauris sit amet urna molestie dignissim. Donec in lectus pretium, vestibulum nisi sit amet, hendrerit libero.
                        </p>

                        <p>
                            Vivamus mattis sapien non eleifend rutrum. Nunc odio mi, tempor ac mollis a, pretium in mauris. Sed id magna ac lacus maximus tristique. Phasellus sit amet mi sem. Sed facilisis justo a tortor condimentum cursus. In placerat ultrices gravida. Morbi dapibus dignissim fermentum. Proin eleifend, lacus sed congue laoreet, tellus ante placerat odio, eu dictum enim quam a arcu. In hendrerit fringilla laoreet. Pellentesque faucibus tincidunt ligula, a maximus nisl malesuada vel. Maecenas porta sed ligula in varius. Quisque ullamcorper cursus pretium. Donec mollis cursus mi nec venenatis.
                        </p>
                    </div>
                </div>
            </main>
        </Layout>
    );
};
