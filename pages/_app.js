-import 'tailwindcss/tailwind.css'
+import "tailwindcss/tailwind.css";
+import { SessionProvider } from "next-auth/react";
 
-function MyApp({ Component, pageProps }) {
-  return <Component {...pageProps} />
+function MyApp({ Component, pageProps: { session, ...pageProps } }) {
+  return (
+    <SessionProvider session={session}>
+      <Component {...pageProps} />
+    </SessionProvider>
+  );
 }
 
-export default MyApp
+export default MyApp;
