---
title: Project
---

<div class="app-body">
	
	<div class="section">
		<div class="section-body">
			<div class="header">
				<div class="header-title">
					<h1>account_name / analytics-suite</h1>
				</div>
				<div class="header-labels">
					<span class="badge badge-success">Connection OK</span>
				</div>
			</div>
			<div class="fields">
				<div class="field">
					<div class="field-key">Next Run</div>
					<div class="field-value">20 min</div>
				</div>
				<div class="field">
					<div class="field-key">Last Run</div>
					<div class="field-value">40 min</div>
				</div>
				<div class="field">
					<div class="field-key">Test Status</div>
					<div class="field-value"><span class="label label-success">Passing</span></div>
				</div>
				<div class="field">
					<div class="field-key">Connection</div>
					<div class="field-value"><a ng-click="showroute('connection')">Sample Connection</a></div>
				</div>
			</div>
		</div>
	</div>

	<div class="section">
		<div class="section-header">
			<div class="header">
				<div class="header-title">
					<h4>Jobs <small>(Scheduled tasks that run this project at regular intervals)</small></h4>
				</div>
				<div class="header-actions">
					<a class="btn btn-default btn-sm meta">add job</a>
				</div>
			</div>
		</div>
		<div class="section-table">
			<table class="table table-justified table-hover table-condensed">
				<thead>
					<tr>
						<th>Job</th>
						<th>Schedule</th>
						<th>Next Run</th>
						<th>Last Run</th>
						<th class="text-right">Status</th>
						<th></th>
					</tr>
				</thead>
				<tbody>
					<tr class="success">
						<td>Job Name 1</td>
						<td><div class="label label-default">Hourly</div></td>
						<td>20 min</td>
						<td>40 min</td>
						<td class="text-right"><div class="label label-success">Success</div></td>
						<td>
							<div class="dropdown">
								<div class="light" data-toggle="dropdown"><span class="caret"></span></div>
								<ul class="dropdown-menu dropdown-menu-right">
									<li><a href="#">Run Job</a></li>
									<li><a href="#" data-toggle="modal" data-target="#run-edit">Edit</a></li>
									<li class="divider"></li>
									<li><a href="#" data-toggle="modal" data-target="#run-remove" class="text-danger">Remove</a></li>
								</ul>
							</div>
						</td>
					</tr>
					<tr class="danger">
						<td>Job Name 2</td>
						<td><div class="label label-default">Daily 12am</div></td>
						<td>20 min</td>
						<td>40 min</td>
						<td class="text-right"><div class="label label-danger">Fail</div></td>
						<td>
							<div class="dropdown">
								<div class="light" data-toggle="dropdown"><span class="caret"></span></div>
								<ul class="dropdown-menu dropdown-menu-right">
									<li><a href="#">Run Job</a></li>
									<li><a href="#" data-toggle="modal" data-target="#run-edit">Edit</a></li>
									<li class="divider"></li>
									<li><a href="#" data-toggle="modal" data-target="#run-remove" class="text-danger">Remove</a></li>
								</ul>
							</div>
						</td>
					</tr>
					<tr class="success">
						<td>Job Name 3</td>
						<td><div class="label label-default">Weekdays 8am, 5pm</div></td>
						<td>20 min</td>
						<td>40 min</td>
						<td class="text-right"><div class="label label-success">Success</div></td>
						<td>
							<div class="dropdown">
								<div class="light" data-toggle="dropdown"><span class="caret"></span></div>
								<ul class="dropdown-menu dropdown-menu-right">
									<li><a href="#">Run Job</a></li>
									<li><a href="#" data-toggle="modal" data-target="#run-edit">Edit</a></li>
									<li class="divider"></li>
									<li><a href="#" data-toggle="modal" data-target="#run-remove" class="text-danger">Remove</a></li>
								</ul>
							</div>
						</td>
					</tr>
					<tr class="success">
						<td>Job Name 4</td>
						<td><div class="label label-default">Hourly</div></td>
						<td>20 min</td>
						<td>40 min</td>
						<td class="text-right"><div class="label label-success">Success</div></td>
						<td>
							<div class="dropdown">
								<div class="light" data-toggle="dropdown"><span class="caret"></span></div>
								<ul class="dropdown-menu dropdown-menu-right">
									<li><a href="#">Run Job</a></li>
									<li><a href="#" data-toggle="modal" data-target="#run-edit">Edit</a></li>
									<li class="divider"></li>
									<li><a href="#" data-toggle="modal" data-target="#run-remove" class="text-danger">Remove</a></li>
								</ul>
							</div>
						</td>
					</tr>
				</tbody>
			</table>
		</div>
	</div>

	<div class="section">
		<div class="section-header">
			<div class="header">
				<div class="header-title">
					<h4>Runs <small>(Chronological list of jobs that have run)</small></h4>
				</div>
				<div class="header-filters">
					
				</div>
			</div>
		</div>
		<div class="section-table">
			<table class="table table-justified table-hover table-large">
				<thead>
					<tr>
						<th class="sm">Status</th>
						<th>Job / Cause</th>
						<th>Notes</th>
						<th class="sm">Time / Duration</th>
						<th></th>
					</tr>
				</thead>
				<tbody>
					{% for i in (1..5) %}
						<tr>
							<td class="sm"><span class="badge badge-success">Success</span></td>
							<td>
								<div>Job Name 1</div>
								<div class="label block label-warning">force run</div>
							</td>
							<td>
								<div>Merge pull request #323 from CasperSleep/jenny</div>
								<div class="meta">alinqianyun51 committed on GitHub 1 day ago <a href="#" class="code">#726341a</a></div>
							</td>
							<td class="sm cell-right">
								<div class="label block">01/20/2017 12:11am</div>
								<div class="label label-default block">20 min</div>
							</td>
							<td data-toggle="tooltip" title="Logs &amp; Notifications" data-placement="top">
								<a href="#" class="btn btn-default btn-sm meta" data-toggle="modal" data-target="#run">details...</a>
							</td>
						</tr>
					{% endfor %}
				</tbody>
			</table>
		</div>
	</div>

</div>

<div class="app-header">
	<div class="header">
		<div class="header-title">
			<h2>Project Overview</h2>
		</div>
		<div class="header-actions">
			<div class="dropdown">
				<button class="btn btn-primary" data-toggle="dropdown">Run Job <span class="caret"></span></button>
				<ul class="dropdown-menu dropdown-menu-right">
					<li><a href="#">Job 1</a></li>
					<li><a href="#">Job 2</a></li>
					<li><a href="#">Job 3</a></li>
					<li><a href="#">Job 4</a></li>
					<li><a href="#">Job 5</a></li>
				</ul>
			</div>
		</div>
	</div>
</div>

