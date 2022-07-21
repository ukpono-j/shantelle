import React from 'react'
import "./DashboardAnalysis.css"

function DashboardAnalysis() {
    return (
        <div>
            <div className='Export'>
                <div><h2>Dashboard</h2></div>
                <div className='export-container'>
                    <select>
                        <option>Current date</option>
                        <option>Current date</option>
                        <option>Current date</option>
                    </select>
                    <div>
                        Export
                    </div>
                </div>
            </div>
            <div className='dashboard-analysis'>
                <div className='dashboard-analysis-bx'>
                    <h3 className='analysis-head'>Total sells</h3>
                    <p className='analysis-text'>$3799.00</p>
                    {/* ============= Loaders ============ */}

                </div>
                <div className='dashboard-analysis-bx'>
                    <h3 className='analysis-head'>Average order value</h3>
                    <p className='analysis-text'>$272.98</p>
                </div>
                <div className='dashboard-analysis-bx'>
                    <h3 className='analysis-head'>Total orders</h3>
                    <p className='analysis-text'>$272.98</p>
                </div>
                <div className='dashboard-analysis-bx'>
                    <h3 className='analysis-head'>Analysis Details</h3>
                    <p className='analysis-text'>$272.98</p>
                </div>
            </div>
            <div className='dashboard-anal'>
                <div className='dashboard-anal-1'>
                    <h4>Active users</h4>
                  <div className='anal-total-container'>
                  <div className='total-anal-no'>148</div>
                  </div>
                    <table className='an-table'>
                        <tr>
                            <th>Active pages</th>
                            <th>Users</th>
                        </tr>
                        <tr>
                            <td>/products/brandix-z4</td>
                            <td className='an-left'>15</td>
                        </tr>
                        <tr>
                            <td>/products/brandix-z4</td>
                            <td className='an-left'>11</td>
                        </tr>
                        <tr>
                            <td>/products/brandix-z4</td>
                            <td className='an-left'>7</td>
                        </tr>
                        <tr>
                            <td>/products/brandix-z4</td>
                            <td className='an-left'>4</td>
                        </tr>
                        <tr>
                            <td>/products/brandix-z4</td>
                            <td className='an-left'>3</td>
                        </tr>
                        <tr>
                            <td>/products/brandix-z4</td>
                            <td className='an-left'>3</td>
                        </tr>
                        <tr>
                            <td>/products/brandix-z4</td>
                            <td className='an-left'>1</td>
                        </tr>
                    </table>
                </div>
                <div className='dashboard-anal-2'>
                    <h4>Customers List</h4>
                    <div className='inbox-static'>
                        <table>
                            <tr>
                                <th>Name</th>
                                <th>Email Address</th>
                                <th>Last Log</th>
                                <th>Phone No.</th>
                            </tr>
                            <tr>
                                <td>Ubong Akpan</td>
                                <td>ukponoakpan270@gmail.com</td>
                                <td>2/10/2018</td>
                                <td>081634223850</td>
                            </tr>
                            <tr>
                                <td>Ubong Akpan</td>
                                <td>ukponoakpan270@gmail.com</td>
                                <td>2/10/2018</td>
                                <td>081634223850</td>
                            </tr>
                            <tr>
                                <td>Ubong Akpan</td>
                                <td>ukponoakpan270@gmail.com</td>
                                <td>2/10/2018</td>
                                <td>081634223850</td>
                            </tr>
                            <tr>
                                <td>Ubong Akpan</td>
                                <td>ukponoakpan270@gmail.com</td>
                                <td>2/10/2018</td>
                                <td>081634223850</td>
                            </tr>
                            <tr>
                                <td>Ubong Akpan</td>
                                <td>ukponoakpan270@gmail.com</td>
                                <td>2/10/2018</td>
                                <td>081634223850</td>
                            </tr>
                            <tr>
                                <td>Ubong Akpan</td>
                                <td>ukponoakpan270@gmail.com</td>
                                <td>2/10/2018</td>
                                <td>081634223850</td>
                            </tr>
                            <tr>
                                <td>Ubong Akpan</td>
                                <td>ukponoakpan270@gmail.com</td>
                                <td>2/10/2018</td>
                                <td>081634223850</td>
                            </tr>
                  
                        </table>
                    </div>
                </div>
            </div>
            <div className='anal-1'>
                {/* <h1>Recent Marketing Analysis</h1> */}
                <div className='anal-container'>
                    <h4>Recent Order</h4>
                    <table className='order-table'>
                        <tr>
                            <th>No.</th>
                            <th>Status</th>
                            <th>Co.</th>
                            <th>Customer</th>
                            <th>Date</th>
                            <th>Total</th>
                        </tr>
                        <tbody>
                            <tr>
                                <td>#00745</td>
                                <td>Pending</td>
                                <td>Nigeria</td>
                                <td>Giordano Bruno</td>
                                <td>2020-11-02</td>
                                <td>$2,742.00</td>
                            </tr>
                            <tr>
                                <td>#00745</td>
                                <td>Hold</td>
                                <td>Nigeria</td>
                                <td>Giordano Bruno</td>
                                <td>2020-11-02</td>
                                <td>$2,742.00</td>
                            </tr>
                            <tr>
                                <td>#00745</td>
                                <td>Pending</td>
                                <td>Nigeria</td>
                                <td>Giordano Bruno</td>
                                <td>2020-11-02</td>
                                <td>$2,742.00</td>
                            </tr>
                            <tr>
                                <td>#00745</td>
                                <td>Canceled</td>
                                <td>Nigeria</td>
                                <td>Giordano Bruno</td>
                                <td>2020-11-02</td>
                                <td>$2,742.00</td>
                            </tr>
                            <tr>
                                <td>#00745</td>
                                <td>Completed</td>
                                <td>Nigeria</td>
                                <td>Giordano Bruno</td>
                                <td>2020-11-02</td>
                                <td>$2,742.00</td>
                            </tr>
                            <tr>
                                <td>#00745</td>
                                <td>Completed</td>
                                <td>Nigeria</td>
                                <td>Giordano Bruno</td>
                                <td>2020-11-02</td>
                                <td>$2,742.00</td>
                            </tr>
                            <tr>
                                <td>#00745</td>
                                <td>Pending</td>
                                <td>Nigeria</td>
                                <td>Giordano Bruno</td>
                                <td>2020-11-02</td>
                                <td>$2,742.00</td>
                            </tr>
                            <tr>
                                <td>#00745</td>
                                <td>Completed</td>
                                <td>Nigeria</td>
                                <td>Giordano Bruno</td>
                                <td>2020-11-02</td>
                                <td>$2,742.00</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <div className='dashboard-anal'>
                <div className='dashboard-anal-1'>
                    <h4>Sales by traffic source</h4>
                </div>
                <div className='dashboard-anal-2'>
                    <h4>Recent activity</h4>
                </div>
            </div>

        </div>
    )
}

export default DashboardAnalysis