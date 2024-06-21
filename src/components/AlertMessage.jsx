import Alert from 'react-bootstrap/Alert';

function AlertMessage({className, formMessageDetails}) {
    return <Alert className={className} variant={formMessageDetails.variant}>
        {formMessageDetails.message}
    </Alert>
}

export default AlertMessage