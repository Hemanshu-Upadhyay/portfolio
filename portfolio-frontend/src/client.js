import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client = sanityClient({
  projectId: 'anb6ivzo',
  dataset: 'production',
  apiVersion: '2022-02-01',
  useCdn: true,
  token: "skGrW56WwVMZT0BVWNcAaFY6TKro6oFngniXYi6tWLpP7kk4i4ce6rtzmW7cvrNnfPMPns2vMo4PKkybsrv3RZdrtvSYzKI8Ux984fBqzvwulv0RLocfiw6XsDLicmBqx6RELwVnThnCB2FwfjQlFH2hMCKFrPG2YY3HP9ilhWKtktS8d5lu",
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);
