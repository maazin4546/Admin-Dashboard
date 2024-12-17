// import { deleteUser } from "@/app/lib/actions";
// import { fetchUsers } from "@/app/lib/data";
import Pagination from "@/app/ui/dashboard/pagination/pagination";
import Search from "@/app/ui/dashboard/search/search";
import styles from "@/app/ui/dashboard/users/users.module.css";
import Image from "next/image";
import Link from "next/link";

const UsersPage = async ({ searchParams }) => {
    // const q = searchParams?.q || "";
    // const page = searchParams?.page || 1;
    // const { count, users } = await fetchUsers(q, page);

    return (
        <div className={styles.container}>
        
            <div className={styles.top}>
                <Search placeholder="Search for a user..." />
                <Link href="/dashboard/users/add">
                    <button className={styles.addButton}>Add New</button>
                </Link>
            </div>

            <table className={styles.table}>
                <thead>
                    <tr>
                        <td>Name</td>
                        <td>Email</td>
                        <td>Created At</td>
                        <td>Role</td>
                        <td>Status</td>
                        <td>Action</td>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            <div className={styles.user}>
                                <Image
                                    src={"/noavatar.png"}
                                    alt=""
                                    width={40}
                                    height={40}
                                    className={styles.userImage}
                                />
                                Mazin
                            </div>
                        </td>
                        <td>mazin@gmail.com</td>
                        <td>Oct 30 2023</td>
                        <td>client</td>
                        <td>passive</td>
                        
                        <td>
                            <div className={styles.buttons}>
                                <Link href={`/dashboard/users`}>
                                    <button className={`${styles.button} ${styles.view}`}>
                                        View
                                    </button>
                                </Link>
                                <form>
                                    <input type="hidden" name="id"  />
                                    <button className={`${styles.button} ${styles.delete}`}>
                                        Delete
                                    </button>
                                </form>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>

            {/* <Pagination count={count} /> */}
            <Pagination/>
        </div>
    );
};

export default UsersPage;
