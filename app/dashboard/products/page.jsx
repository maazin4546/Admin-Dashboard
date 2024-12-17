import Image from "next/image";
import Link from "next/link";
import styles from "@/app/ui/dashboard/products/products.module.css";
import Search from "@/app/ui/dashboard/search/search";
import Pagination from "@/app/ui/dashboard/pagination/pagination";
// import { fetchProducts } from "@/app/lib/data";
// import { deleteProduct } from "@/app/lib/actions";

const ProductsPage = async ({ searchParams }) => {
  // const q = searchParams?.q || "";
  // const page = searchParams?.page || 1;
  // const { count, products } = await fetchProducts(q, page);

  return (
    <div className={styles.container}>
      
      <div className={styles.top}>
        <Search placeholder="Search for a product..." />
        <Link href="/dashboard/products/add">
          <button className={styles.addButton}>Add New</button>
        </Link>
      </div>

      <table className={styles.table}>
        <thead>
          <tr>
            <td>Title</td>
            <td>Description</td>
            <td>Price</td>
            <td>Created At</td>
            <td>Stock</td>
            <td>Action</td>
          </tr>
        </thead>
        <tbody>
          {/* {products.map((product) => ( */}
            <tr>
              <td>
                <div className={styles.product}>
                  <Image
                    src={"/noproduct.jpg"}
                    alt=""
                    width={40}
                    height={40}
                    className={styles.productImage}
                  />
                  Laptop
                </div>
              </td>
              <td>Dell gaming laptop</td>
              <td>1200000</td>
              <td>2 oct</td>
              <td>2 oct</td>

              <td>
                <div className={styles.buttons}>
                  <Link href={`/dashboard/products/`}>
                    <button className={`${styles.button} ${styles.view}`}>
                      View
                    </button>
                  </Link>
                  <form >
                    <input type="hidden" name="id" />
                    <button className={`${styles.button} ${styles.delete}`}>
                      Delete
                    </button>
                  </form>
                </div>
              </td>
            </tr>
          {/* ))} */}
        </tbody>
      </table>
      {/* <Pagination count={count} /> */}
      <Pagination  />
    </div>
  );
};

export default ProductsPage;
