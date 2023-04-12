import Layout from "@/components/Layout";
import JobForm from "@/components/JobForm";
import { useRouter } from "next/dist/client/router";

export default function CareersPage() {
  const router = useRouter();
  const param = router.query.id;

  return (
    <Layout>
      <div
        className={`w-screen md:h-[470px] h-56 bg-[url('/all-jobs-page.jpg')] bg-no-repeat bg-center bg-cover md:bg-fixed`}
      />
      <JobForm
        id={param}
        sectionTitle=""
        href="/"
        textAreaPlaceholder="Carta de apresentação"
        inputEmailPlaceholder="E-mail"
        inputNamePlaceholder="Nome"
        inputSurnamePlaceholder="Sobrenome"
        label="Politica de Privacidade"
        mode="dark"
        policyAcceptanceText="Aceito a"
        primary={true}
        type="text"
        underline={true}
      />
    </Layout>
  );
}
