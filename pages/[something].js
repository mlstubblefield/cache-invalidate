export default function SomethingPage({ something, dateTime }) {
    return (
      <div>
        <h1>Parameter: {something}</h1>
        <p>New DateTime (updated every 24 hours): {dateTime}</p>
      </div>
    );
  }
  
  // Fetch data at build time
  export async function getStaticProps({ params }) {
    const something = params.something;
    const dateTime = new Date().toString();
  
    // Pass post data to the page via props
    return {
      props: { 
        something,
        dateTime 
      },
      revalidate: 86400, // In seconds (24 hours)
    };
  }
  
  // Specify dynamic routes to pre-render pages based on data
  export async function getStaticPaths() {
    // Example of statically generating only specific paths
    // In a real app, you might fetch a list of paths from an API or your filesystem
    const paths = [
      { params: { something: 'example1' } },
      { params: { something: 'example2' } },
      // Add more paths as needed
    ];
  
    return { 
      paths, 
      fallback: 'blocking' // Blocks until the page is generated on the first request
    };
  }
  