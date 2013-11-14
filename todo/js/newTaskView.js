/*
    NewTasksView

    View for entering a new task. This will
    handle the form submit and add a new task
    to the TasksModel
*/

var NewTaskView = {

};

function createNewTaskView(config) {
	var view = Object.create(NewTaskView);
	apply(config, view);

	view.form.submit(function(){
		var titleField = view.form.find('[data-model-attr="title"]');
		var newTitle = titleField.val();
		view.model.addTask({
			title: newTitle,
			done: false
		});

		titleField.val('');

		return false;
	});

	return view;
} //createNewTaskView()