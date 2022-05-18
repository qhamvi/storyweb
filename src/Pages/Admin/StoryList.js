import React from "react";
import datatable from 'datatables.net';
import datatableDT from 'datatables.net-dt';
import $ from 'jquery';
import { Table, Button } from 'react-bootstrap';
import axios from "axios";

const StoryList = () => {

    $(document).ready(function () {
        $('#table-storylist').DataTable();
    });

    const [stories, setStories] = React.useState();

    React.useEffect(() => {
        axios.get('/stories').then(res => setStories(res.data))
    }, [stories])

    const acceptStory = (story_id) => {
        axios.put('/stories/true/'+story_id).then(res => console.log(res.data))
    } 
    
    return (
        <>
            <h1>Danh sách truyện</h1>
            <div className="row">
                <div className="col-12">
                    <Table id="table-storylist" class="display" striped bordered hover>
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Status</th>
                                <th>Title</th>
                                <th>Author</th>
                                <th>Collector</th>
                                <th>Number of Chapters</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                stories && stories.map(story =>
                                    <tr>
                                        <td>{story.id}</td>
                                        <td>{story.status} </td>
                                        <td>{story.title}</td>
                                        <td>{story.author}</td>
                                        <td>{story.collector}</td>
                                        <td>{story.numberChap}</td>
                                        <td>
                                            <Button variant="link" onClick={() => acceptStory(story.id)}>Duyệt</Button>
                                        </td>
                                    </tr>
                                )
                            }
                        </tbody>
                    </Table>
                </div>
            </div>
        </>
    )
}

export default StoryList;