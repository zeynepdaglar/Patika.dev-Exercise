import React from 'react'

function list() {
  return (
    <div>
        <header className="header">
            <h1>todos</h1>
        </header>
        <form>
			<input className="new-todo" placeholder="What needs to be done?" autoFocus />
		</form>

        <section className="main">
		<input className="toggle-all" type="checkbox"/>
		<label htmlFor="toggle-all">
			Mark all as complete
		</label>

		<ul className="todo-list">
			<li className="completed">
				<div className="view">
					<input className="toggle" type="checkbox"/>
					<label>Learn JavaScript</label>
					<button className="destroy"></button>
				</div>
			</li>
		</ul>
	</section>

    </div>
  )
}

export default list