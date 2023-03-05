import Layout from "@/components/Layout";
import SectionTitle from "@/components/SectionTitle";
import OurTeam from "@/components/OurTeam";

export default function AboutUs() {
  return (
    <Layout>
      <div
        className={`w-screen md:h-[470px] h-56 bg-[url('/CarouselImg3.jpg')] bg-no-repeat bg-center bg-cover md:bg-fixed`}
      />
      <div className="flex justify-center md:my-28 my-9">
        <div className="w-full max-w-6xl p-4">
          <SectionTitle
            mode="dark"
            sectionTitle="Quem Somos"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Euismod in at eros, aliquam quis ornare faucibus. Metus volutpat, semper et sit volutpat iaculis.
Non, penatibus quis eros cursus sit diam facilisi pellentesque. Vitae pharetra est nulla laoreet. Diam diam pulvinar ornare felis, dignissim praesent interdum. 
Mattis vel lacus faucibus lorem semper egestas pulvinar magnis facilisis. Diam dolor lacus hendrerit in arcu."
          />
        </div>
      </div>
      <OurTeam
        fontStyle="font-bold"
        genericTitle="Nosso Time"
        hasIcon={false}
        ourTeam={[
          {
            name: "Siqueira",
            position: "Backend Developer",
            src: "bg-[url('/CarouselImg2.jpg')]",
          },
          {
            name: "Rambo",
            position: "Backend Developer",
            src: "bg-[url('/CarouselImg2.jpg')]",
          },
          {
            name: "Gomes",
            position: "Backend Developer",
            src: "bg-[url('/CarouselImg2.jpg')]",
          },
          {
            name: "João",
            position: "Front end Developer",
            src: "bg-[url('/CarouselImg2.jpg')]",
          },
          {
            name: "Pedro",
            position: "Front end Developer",
            src: "bg-[url('/CarouselImg2.jpg')]",
          },
          {
            name: "Vitor",
            position: "Front end Developer",
            src: "bg-[url('/CarouselImg2.jpg')]",
          },
        ]}
      />
    </Layout>
  );
}
