import Layout from "@/components/Layout";
import JobForm from "@/components/JobForm";

export default function CareersPage() {
  return (
    <Layout>
      <div
        className={`w-screen md:h-[470px] h-56 bg-[url('/all-jobs-page.jpg')] bg-no-repeat bg-center bg-cover md:bg-fixed`}
      />
      <JobForm
        sectionTitle=""
        jobTitle="Analista de dados"
        jobCountry="Brazil"
        jobModality="Remoto"
        jobJourney="Tempo Integral"
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
