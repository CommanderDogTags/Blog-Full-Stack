import * as React from 'react';
import { useState, useEffect } from 'react';
import { json } from '../utils/api';
import { RouteComponentProps } from 'react-router-dom';

const Compose: React.FC<ComposeProps> = props => {
    const [authorid, setAuthorid] = useState<string>('1');
    const [content, setContent] = useState<string>('');
    const [title, setTitle] = useState<string>('');
    const [authors, setAuthors] = useState<{id:number, name:string}[]>([]);

	useEffect(() => {
		(async () => {
			try {
				let authors = await json('/api/authors');
				setAuthors(authors);
			} catch (error) {
				console.log(error);
			}
		})();
	}, []);

	const handleSubmit = async (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
		try {
            let response:any = await json('/api/blogs', 'POST', { authorid, title, content });
            console.log(response.insertId);
            props.history.push(`/info/${response.insertId}`);
        } catch (error) {
            console.log(error);
        }
    };
    
    return (
        <>
                <div className="bg-secondary">
                    <main className="container py-5">
                        <h1 className="text-center text-white">Add a Blog!</h1>
                    </main>
                </div>

                <div className="col-md-6 offset-md-3 py-3">
                    <article className="card my-2 shadow-sm border border-primary">
                        <div className="card-body text-center">
                            
                            <span className="text-info">Select User:</span>
                            <select value={authorid} onChange={e => setAuthorid(e.target.value)} className="form-control my-1 shadow-sm text-center">
                                {authors.map(author => (
                                    <option key={author.id} value={author.id}>{author.name}</option>
                                ))}
                            </select>

                            {/* <input type="text" value={author} 
                             className="form-control my-1 shadow-sm" /> */}
                            <span className="text-info">Blog Title:</span>
                            <input type="text" placeholder="Type your title here..." value={title} onChange={e => setTitle(e.target.value)}
                            className="form-control my-1 shadow-sm" />
                            
                            <span className="text-info">Blog Content:</span>
                            <textarea rows={8} placeholder="Type your content here..." value={content} onChange={e => setContent(e.target.value)} 
                            className="form-control my-1 shadow-sm" />
                        </div>
                        <div className="container text-center">
                            <button className="btn btn-outline-primary btn-md mb-3" onClick={handleSubmit}>Post!</button>
                        </div>
                    </article>
                </div>
            </>
        );
}

interface ComposeProps extends RouteComponentProps {}

export default Compose;