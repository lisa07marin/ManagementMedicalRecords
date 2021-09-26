import React, { useEffect, useState } from 'react';
import { Table } from 'reactstrap';

const treat = [
    {
        date: 1,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque sed dolor vitae nunc congue bibendum eget nec libero. Ut egestas ligula in finibus elementum.",
        amount: 2000
    },
    {
        date: 2,
        description: "Cras eleifend commodo iaculis. Nullam non mauris lacus. Nulla commodo risus et metus ultricies, ut scelerisque dolor interdum. Nam elementum nisi mi, vel rhoncus mauris vestibulum sed.",
        amount: 5000
    },
    {
        date: 3,
        description: "Morbi eget aliquam ipsum. Pellentesque ornare diam ac lacus maximus tincidunt. Sed venenatis ut ligula vitae pharetra. Mauris pretium volutpat diam dignissim rutrum.",
        amount: 10000
    },
];

const TreatmentsList = ({ patient }) => {
    const [treatments, setTreatments] = useState([]);

    useEffect(() => {
        if (patient) {
            setTreatments(treat)
        }
    }, [patient])

    return (
        <React.Fragment>      
            <h5>TRATAMIENTOS:</h5>
            <Table striped>
                <thead>
                    <tr>
                        <th>Fecha</th>
                        <th>Tratamiento</th>
                        <th>Importe</th>
                    </tr>
                </thead>
                <tbody>
                    {treatments && treatments.map(t =>
                        <tr>
                            <th scope="row">{t.date}</th>
                            <td>{t.description}</td>
                            <td>{t.amount}</td>

                        </tr>
                    )}
                </tbody>
            </Table>
        </React.Fragment>

    )
}

export default TreatmentsList;