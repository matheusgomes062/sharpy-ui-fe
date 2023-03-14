import Layout from "@/components/Layout";
import SectionTitle from "@/components/SectionTitle";
import Solutions from "@/components/Solutions";

export default function SolutionsPage() {
  return (
    <Layout>
      <div
        className={`w-screen md:h-[470px] h-56 bg-[url('/solutions-page.jpg')] bg-no-repeat bg-center bg-cover md:bg-fixed`}
      />
      <div id="about-us" className="flex justify-center md:my-28 my-9">
        <div className="w-full max-w-6xl p-4">
          <SectionTitle
            mode="dark"
            sectionTitle="Soluções"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit.
Augue ornare habitasse netus ac hac sagittis. Purus nulla id ut magna."
          />
          <Solutions
            solutions={[
              {
                title: "Aplicações personalizadas",
                icon: "Devices",
                solutionsCardDescription:
                  "Nesse modelo de serviço cuidamos de todo processo de desenvolvimento de soluções desde o ponto zero até a entrega em produção, nesse caso alocamos um time totalmente interno que atuarão nas frentes de agilidade, produto, design e desenvolvimento.",
              },
              {
                title: "Consultoria em desenvolvimento",
                icon: "Integration",
                solutionsCardDescription:
                  "Nesse modelo alocamos consultores sharpy dentro dos clientes para atender demandas técnicas.",
              },
              {
                title: "Soluções Sharpy",
                icon: "Screenshot",
                solutionsCardDescription:
                  "Aqui teremos soluções comuns a pronta entrega que podem ser provisionadas para utilização a critério do cliente",
              },
            ]}
          />
        </div>
      </div>
    </Layout>
  );
}
