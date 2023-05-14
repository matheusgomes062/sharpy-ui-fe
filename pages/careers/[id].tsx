import Layout from "@/components/Layout";
import { useRouter } from "next/dist/client/router";
import JobDescription from "@/components/JobDescription";
import MoreOpportunities from "@/components/MoreOpportunities";

export default function CareersPage() {
  const router = useRouter()
  const param = router.query.id

  return (
    <Layout>
      <div
        className={`w-screen md:h-[470px] h-56 bg-[url('/all-jobs-page.jpg')] bg-no-repeat bg-center bg-cover md:bg-fixed`}
      />
      {param !== undefined && (
        <div>
          <JobDescription
            id={param}
            mode="dark"
            companyDescription="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Euismod in at eros, aliquam quis ornare faucibus. Metus volutpat, semper et sit volutpat iaculis. Non, penatibus quis eros cursus sit diam facilisi pellentesque. Vitae pharetra est nulla laoreet. Diam diam pulvinar ornare felis, dignissim praese"
            label="Aplicar"
            primary={true}
          />
          <div className="mt-8 mb-12">
            <MoreOpportunities
              selectedJobId={parseInt(param as string)}
              buttonLabel="Ver Mais"
              dropDownPlaceholder="Filtrar pro Área"
              inputPlaceholder="Buscar Oportunidade"
            />
          </div>
        </div>
      )}
    </Layout>
  );
}
