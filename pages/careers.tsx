import Layout from "@/components/Layout";
import { PrismaClient } from "@prisma/client";

export async function getStaticProps() {
  
  const client = new PrismaClient();
    const roles = await client.role.findMany({
    where: { isRemote: true },
    include: { prospects : true , _count : true}
  });

  console.log(roles)
  return {
    props: {roles}, // will be passed to the page component as props
  }
}


// const getProspects = async () => {
//   const roles = await client.role.findMany({
//     where: { isRemote: true },
//     include: { prospects : true , _count : true}
//   });

//   console.log(roles)
// };


export default function Careers() {
  return (
    <Layout>
      <>
      <h1>Hello World!</h1>
      </>
    </Layout>
  );
}
