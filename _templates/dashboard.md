---
title: Dashboard
---

<div class="app-body">
	<div class="cards">
		<div class="card card-success">
			<div class="section section-launch" ng-click="showroute('project')">
				<div class="section-header">
					<div class="header">
						<div class="header-title"><h3>account_name / analytics-suite</h3></div>
						<div class="header-labels"><span class="badge badge-success">Connection OK</span></div>
					</div>
				</div>
				<div class="section-table">
					<table class="table table-justified table-condensed">
						<thead>
							<tr>
								<th>Passing</th>
								<th>Failing</th>
								<th>Last Run</th>
								<th>Next Run</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td><span class="label label-success">3 Jobs</span></td>
								<td><span class="label label-danger"></span></td>
								<td><span class="label label-default">40 min</span></td>
								<td><span class="label">20 min</span></td>
							</tr>
						</tbody>
					</table>
				</div>
			</div>
		</div>
		<div class="card card-danger">
			<div class="section section-launch" ng-click="showroute('project')">
				<div class="section-header">
					<div class="header">
						<div class="header-title"><h3>account_name / analytics-suite</h3></div>
						<div class="header-labels"><span class="badge badge-danger">Connection Failed</span></div>
					</div>
				</div>
				<div class="section-table">
					<table class="table table-justified table-condensed">
						<thead>
							<tr>
								<th>Passing</th>
								<th>Failing</th>
								<th>Last Run</th>
								<th>Next Run</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td><span class="label label-success">2 Jobs</span></td>
								<td><span class="label label-danger">1 job</span></td>
								<td><span class="label label-default">40 min</span></td>
								<td><span class="label">20 min</span></td>
							</tr>
						</tbody>
					</table>
				</div>
			</div>
		</div>
		{% for i in (1..5) %}
			<div class="card card-success">
				<div class="section section-launch" ng-click="showroute('project')">
					<div class="section-header">
						<div class="header">
							<div class="header-title"><h3>account_name / analytics-suite</h3></div>
							<div class="header-labels"><span class="badge badge-success">Connection OK</span></div>
						</div>
					</div>
					<div class="section-table">
						<table class="table table-justified table-condensed">
							<thead>
								<tr>
									<th>Passing</th>
									<th>Failing</th>
									<th>Last Run</th>
									<th>Next Run</th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td><span class="label label-success">3 Jobs</span></td>
									<td><span class="label label-danger"></span></td>
									<td><span class="label label-default">40 min</span></td>
									<td><span class="label">20 min</span></td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
			</div>
		{% endfor %}
		<div class="card">
			<div class="section section-launch" ng-click="showroute('project')">
				<div class="section-header">
					<div class="header">
						<div class="header-title"><h3>account_name / analytics-suite</h3></div>
						<div class="header-actions">
							<span class="btn btn-sm btn-default meta">configure...</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>

<div class="app-header">
	<div class="header">
		<div class="header-title">
			<h2>Sinter Dashboard</h2>
		</div>
	</div>
</div>
