import Layout from "../components/layout";
import Link from "next/link";

export default function Pagina404() {
    return (
        <Layout
            title="Pagina no encontrada"
        >
            <p className="error">Esta pagina no existe</p>
            <Link href="/">
                <a className="error-enlace">
                    Volver al Inicio
                </a>
            </Link>
        </Layout>
    );
};