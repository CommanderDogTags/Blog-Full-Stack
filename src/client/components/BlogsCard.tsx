import * as React from 'react';
import * as moment from 'moment';
import { Link } from 'react-router-dom';

const BlogsCard: React.FC<BlogsCardProps> = props => {

    return (
        <>
            <div className="col-md-8 offset-md-2">
                <article className="card my-3 shadow-sm border border-primary">
                    <div className="card-header text-center bg-secondary">
                        <h4 className="card-title text-white mt-1">{props.blog.title}</h4>
                    </div>

                    <div className="card-body text-center">
                        <p className="card-text text-info">{props.blog.content.substring(0, 100)}...</p>
                        <Link to={`/info/${props.blog.id}`} className="btn btn-outline-primary btn-md mb-1">Read Blog!</Link>
                        {/* <Link to={`/editing/${props.blog.id}`} className="btn btn-outline-primary btn-sm">Edit Blog!</Link> */}
                    </div>
                    <div className="card-footer text-center bg-secondary">
                        <p className="text-white mb-0">created by: {props.blog.author}</p>
                        <p className="text-white mb-0">on: {moment(props.blog._created).format("MMM Do YYYY")}</p>
                    </div>
                </article>
            </div>
        </>
    );
}

interface BlogsCardProps { 
    blog: {id:number, title:string, content:string, author:string, _created:string}
}

export default BlogsCard;