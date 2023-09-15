
import React from "react";
import DenseTable from "../../common/admin_data_table/DataTable.jsx";




function OrderPage() {


    return (
        <div>
            <h2 style={{color:'#494949'}}>Orders</h2>
            <DenseTable/>
            {/*<div style={{marginTop: '20px'}}>
                <h3>Orders</h3>
             <UserTable />
            </div> */}

        </div>
    );
}

export default OrderPage;
