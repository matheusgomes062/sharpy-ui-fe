import Layout from "@/components/Layout";
import JobForm from "@/components/JobForm";
import { useRouter } from "next/dist/client/router";
import MoreOpportunities from "@/components/MoreOpportunities";

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
        titleForThanksMessage="Mensagem de agradecimento!"
        thankYouMessage="Obrigado por se inscrever, estaremos revisando seu currículo e encaminharemos o retorno para o seu e-mail. Boa sorte!"
      />
      <MoreOpportunities
        selectedJobId={parseInt(param as string)}
        buttonLabel="Ver Mais"
        dropDownPlaceholder="Filtrar pro Área"
        inputPlaceholder="Buscar Oportunidade"
      />
    </Layout>
  );
}
