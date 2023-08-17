import Dropdown from 'react-bootstrap/Dropdown';
import {useNavigate} from 'react-router-dom';

export function MenuToggleButton(props) {
    const navigate = useNavigate
    return (
        <Dropdown>
            <Dropdown.Toggle variant="primary" id="dropdown-basic">
                Menu
            </Dropdown.Toggle>

            <Dropdown.Menu>
                <Dropdown.Item href={`/applications-review/${props.id}`}>See
                    applications</Dropdown.Item>
                <Dropdown.Item href={`/edit-job/${props.id}`}>Edit job details</Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
    );
}
