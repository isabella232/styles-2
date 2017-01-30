---
title: Run
type: modal
size: lg
---

<div class="section section-seamless section-silver">
	<div class="section-header">
		<div class="header ">
			<div class="header-title">
				<h4>Run Details</h4>
			</div>
			<div class="header-actions">
				<a href="#" class="close" data-dismiss="modal" ><i data-icon="close" class="md"></i></a>
			</div>
		</div>
	</div>
	<div class="section-body section-body-large-bottom section-body-flush-top">
		<div class="card card-success">
			<div class="section">
				<div class="section-body">
					<div class="fields">
						<div class="field">
							<div class="field-key">Result</div>
							<div class="field-value"><div class="label label-success">Success</div></div>
						</div>
						<div class="field">
							<div class="field-key">Job</div>
							<div class="field-value"><a href="#">Job Name 1</a></div>
						</div>
						<div class="field">
							<div class="field-key">Cause</div>
							<div class="field-value"><div class="label label-warning">Force Run</div></div>
						</div>
						<div class="field">
							<div class="field-key">Time</div>
							<div class="field-value"><div class="label">01/20/2017 12:11am</div></div>
						</div>
						<div class="field">
							<div class="field-key">Duration</div>
							<div class="field-value"><div class="label label-default">11 min</div></div>
						</div>
						<div class="field">
							<div class="field-key">Response</div>
							<div class="field-value">
								<span>Merge pull request #323 from CasperSleep/jenny</span>
								<span class="meta">alinqianyun51 committed on GitHub 1 day ago <a href="#" class="code">#726341a</a></span>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
	<div class="section-tabs">
		<ul>
			<li><a ng-class="{'has-logs':true,'active':(run_mode=='logs')}" ng-click="run_mode='logs';">Logs</a></li>
			<li><a ng-class="{'active':(run_mode=='notifications')}" ng-click="run_mode='notifications';">Notifications</a></li>
		</ul>
	</div>
	<div class="section-body section-body-large section-logs" ng-if="(run_mode=='logs')">
		<pre>pulled new dependency quickbooks
Compiled 87 models, 0 data tests, 0 schema tests, 0 archives, 0 analyses
Loading dependency graph file
Connecting to redshift
Concurrency: 1 threads (target='default')
Running!

18:17:08 | Running 87 models
18:17:08 | 1 of 87 START view model analytics.quickbooks_invoices .............. [RUN]
18:17:09 | 1 of 87 OK created view model analytics.quickbooks_invoices ......... [CREATE VIEW in 0.65s]
18:17:09 | 2 of 87 START view model analytics.quickbooks_payments .............. [RUN]
18:17:10 | 2 of 87 OK created view model analytics.quickbooks_payments ......... [CREATE VIEW in 0.73s]
18:17:10 | 3 of 87 START view model analytics.quickbooks_bill_payments ......... [RUN]
18:17:11 | 3 of 87 OK created view model analytics.quickbooks_bill_payments .... [CREATE VIEW in 1.47s]
18:17:11 | 4 of 87 START view model analytics.sf_opportunities ................. [RUN]
18:17:12 | 4 of 87 OK created view model analytics.sf_opportunities ............ [INSERT 0 1 in 0.95s]
18:17:12 | 5 of 87 START view model analytics.account_exclusions ............... [RUN]
18:17:14 | 5 of 87 OK created view model analytics.account_exclusions .......... [INSERT 0 1 in 1.32s]
18:17:14 | 6 of 87 START view model analytics.aux_account_employees ............ [RUN]
18:17:14 | 6 of 87 OK created view model analytics.aux_account_employees ....... [INSERT 0 1 in 0.69s]
18:17:14 | 7 of 87 START view model analytics.quickbooks_bills ................. [RUN]
18:17:16 | 7 of 87 OK created view model analytics.quickbooks_bills ............ [CREATE VIEW in 1.18s]
18:17:16 | 8 of 87 START view model analytics.quickbooks_billpayment_lines ..... [RUN]
18:17:17 | 8 of 87 OK created view model analytics.quickbooks_billpayment_lines  [CREATE VIEW in 0.80s]
18:17:17 | 9 of 87 START view model analytics.quickbooks_vendors ............... [RUN]
18:17:18 | 9 of 87 OK created view model analytics.quickbooks_vendors .......... [CREATE VIEW in 1.18s]
18:17:18 | 10 of 87 START view model analytics.quickbooks_classifications ...... [RUN]
18:17:18 | 10 of 87 OK created view model analytics.quickbooks_classifications . [CREATE VIEW in 0.70s]
18:17:18 | 11 of 87 START view model analytics.sf_accounts ..................... [RUN]
18:17:19 | 11 of 87 OK created view model analytics.sf_accounts ................ [INSERT 0 1 in 0.88s]
18:17:19 | 12 of 87 START view model analytics.uv_subscription_plans ........... [RUN]
18:17:21 | 12 of 87 OK created view model analytics.uv_subscription_plans ...... [INSERT 0 1 in 1.13s]
18:17:21 | 13 of 87 START view model analytics.cb_domain_aliases ............... [RUN]
18:17:21 | 13 of 87 OK created view model analytics.cb_domain_aliases .......... [INSERT 0 1 in 0.63s]
18:17:21 | 14 of 87 START view model analytics.quickbooks_missing_account_classifications  [RUN]
18:17:22 | 14 of 87 OK created view model analytics.quickbooks_missing_account_classifications  [CREATE VIEW in 1.05s]
18:17:22 | 15 of 87 START view model analytics.quickbooks_statement_order ...... [RUN]
18:17:23 | 15 of 87 OK created view model analytics.quickbooks_statement_order . [CREATE VIEW in 0.89s]
18:17:23 | 16 of 87 START view model analytics.quickbooks_purchases ............ [RUN]
18:17:24 | 16 of 87 OK created view model analytics.quickbooks_purchases ....... [CREATE VIEW in 0.89s]
18:17:24 | 17 of 87 START view model analytics.uv_subdomains ................... [RUN]
18:17:25 | 17 of 87 OK created view model analytics.uv_subdomains .............. [INSERT 0 1 in 1.20s]
18:17:25 | 18 of 87 START view model analytics.uv_products ..................... [RUN]
18:17:26 | 18 of 87 OK created view model analytics.uv_products ................ [INSERT 0 1 in 0.80s]
18:17:26 | 19 of 87 START view model analytics.quickbooks_accounts ............. [RUN]
18:17:27 | 19 of 87 OK created view model analytics.quickbooks_accounts ........ [CREATE VIEW in 0.66s]
18:17:27 | 20 of 87 START view model analytics.uv_users ........................ [RUN]
18:17:28 | 20 of 87 OK created view model analytics.uv_users ................... [INSERT 0 1 in 1.46s]
18:17:28 | 21 of 87 START view model analytics.quickbooks_deposits ............. [RUN]
18:17:29 | 21 of 87 OK created view model analytics.quickbooks_deposits ........ [CREATE VIEW in 0.57s]
18:17:29 | 22 of 87 START view model analytics.uv_watches ...................... [RUN]
18:17:30 | 22 of 87 OK created view model analytics.uv_watches ................. [INSERT 0 1 in 0.93s]
18:17:30 | 23 of 87 START view model analytics.sf_opportunity_medium_classifications  [RUN]
18:17:31 | 23 of 87 OK created view model analytics.sf_opportunity_medium_classifications  [INSERT 0 1 in 0.91s]
18:17:31 | 24 of 87 START view model analytics.uv_tickets ...................... [RUN]
18:17:32 | 24 of 87 OK created view model analytics.uv_tickets ................. [INSERT 0 1 in 1.18s]
18:17:32 | 25 of 87 START view model analytics.quickbooks_journal_entries ...... [RUN]
18:17:33 | 25 of 87 OK created view model analytics.quickbooks_journal_entries . [CREATE VIEW in 0.90s]
18:17:33 | 26 of 87 START view model analytics.cb_companies .................... [RUN]
18:17:35 | 26 of 87 OK created view model analytics.cb_companies ............... [INSERT 0 1 in 1.64s]
18:17:35 | 27 of 87 START view model analytics.quickbooks_items ................ [RUN]
18:17:36 | 27 of 87 OK created view model analytics.quickbooks_items ........... [CREATE VIEW in 1.23s]
18:17:36 | 28 of 87 START view model analytics.cb_null_responses ............... [RUN]
18:17:37 | 28 of 87 OK created view model analytics.cb_null_responses .......... [INSERT 0 1 in 1.32s]
18:17:37 | 29 of 87 START view model analytics.quickbooks_customers ............ [RUN]
18:17:41 | 29 of 87 OK created view model analytics.quickbooks_customers ....... [CREATE VIEW in 3.72s]
18:17:41 | 30 of 87 START view model analytics.uv_nps_ratings .................. [RUN]
18:17:43 | 30 of 87 OK created view model analytics.uv_nps_ratings ............. [INSERT 0 1 in 2.19s]
18:17:43 | 31 of 87 START view model analytics.uv_subscriptions ................ [RUN]
18:17:45 | 31 of 87 OK created view model analytics.uv_subscriptions ........... [INSERT 0 1 in 1.18s]
18:17:45 | 32 of 87 START view model analytics.quickbooks_invoice_lines ........ [RUN]
18:17:46 | 32 of 87 OK created view model analytics.quickbooks_invoice_lines ... [CREATE VIEW in 1.03s]
18:17:46 | 33 of 87 START view model analytics.quickbooks_purchase_lines ....... [RUN]
18:17:47 | 33 of 87 OK created view model analytics.quickbooks_purchase_lines .. [CREATE VIEW in 1.01s]
18:17:47 | 34 of 87 START view model analytics.aux_account_employees_xf ........ [RUN]
18:17:48 | 34 of 87 OK created view model analytics.aux_account_employees_xf ... [INSERT 0 1 in 1.45s]
18:17:48 | 35 of 87 START view model analytics.uv_accounts ..................... [RUN]
18:17:50 | 35 of 87 OK created view model analytics.uv_accounts ................ [INSERT 0 1 in 1.47s]
18:17:50 | 36 of 87 START view model analytics.quickbooks_deposit_lines ........ [RUN]
18:17:51 | 36 of 87 OK created view model analytics.quickbooks_deposit_lines ... [CREATE VIEW in 1.18s]
18:17:51 | 37 of 87 START view model analytics.quickbooks_bill_lines ........... [RUN]
18:17:52 | 37 of 87 OK created view model analytics.quickbooks_bill_lines ...... [CREATE VIEW in 1.18s]
18:17:52 | 38 of 87 START view model analytics.uv_nps_ratings_xf ............... [RUN]
18:17:53 | 38 of 87 OK created view model analytics.uv_nps_ratings_xf .......... [INSERT 0 1 in 1.05s]
18:17:53 | 39 of 87 START view model analytics.quickbooks_classes .............. [RUN]
18:17:54 | 39 of 87 OK created view model analytics.quickbooks_classes ......... [CREATE VIEW in 1.17s]
18:17:54 | 40 of 87 START view model analytics.cb_companies_current ............ [RUN]
18:17:56 | 40 of 87 OK created view model analytics.cb_companies_current ....... [INSERT 0 1 in 1.13s]
18:17:56 | 41 of 87 START view model analytics.quickbooks_journal_lines ........ [RUN]
18:17:56 | 41 of 87 OK created view model analytics.quickbooks_journal_lines ... [CREATE VIEW in 0.86s]
18:17:56 | 42 of 87 START view model analytics.quickbooks_payment_transactions . [RUN]
18:17:57 | 42 of 87 OK created view model analytics.quickbooks_payment_transactions  [CREATE VIEW in 0.76s]
18:17:57 | 43 of 87 START table model analytics.quickbooks_parent_class_map .... [RUN]
18:17:59 | 43 of 87 OK created table model analytics.quickbooks_parent_class_map  [SELECT in 1.77s]
18:17:59 | 44 of 87 START view model analytics.uv_transactions ................. [RUN]
18:18:00 | 44 of 87 OK created view model analytics.uv_transactions ............ [INSERT 0 1 in 1.30s]
18:18:00 | 45 of 87 START view model analytics.quickbooks_bill_transactions .... [RUN]
18:18:01 | 45 of 87 OK created view model analytics.quickbooks_bill_transactions  [CREATE VIEW in 0.76s]
18:18:01 | 46 of 87 START table model analytics.account_inferred_products ...... [RUN]
18:18:06 | 46 of 87 OK created table model analytics.account_inferred_products . [INSERT 0 1 in 5.14s]
18:18:06 | 47 of 87 START view model analytics.account_domains ................. [RUN]
18:18:07 | 47 of 87 OK created view model analytics.account_domains ............ [INSERT 0 1 in 0.92s]
18:18:07 | 48 of 87 START view model analytics.all_days ........................ [RUN]
18:18:08 | 48 of 87 OK created view model analytics.all_days ................... [INSERT 0 1 in 0.98s]
18:18:08 | 49 of 87 START view model analytics.quickbooks_billpayment_transactions  [RUN]
18:18:10 | 49 of 87 OK created view model analytics.quickbooks_billpayment_transactions  [CREATE VIEW in 1.19s]
18:18:10 | 50 of 87 START view model analytics.quickbooks_accounts_xf .......... [RUN]
18:18:11 | 50 of 87 OK created view model analytics.quickbooks_accounts_xf ..... [CREATE VIEW in 1.05s]
18:18:11 | 51 of 87 START view model analytics.uv_transactions_xf .............. [RUN]
18:18:11 | 51 of 87 OK created view model analytics.uv_transactions_xf ......... [INSERT 0 1 in 0.71s]
18:18:11 | 52 of 87 START view model analytics.quickbooks_journal_transactions . [RUN]
18:18:13 | 52 of 87 OK created view model analytics.quickbooks_journal_transactions  [CREATE VIEW in 1.41s]
18:18:13 | 53 of 87 START view model analytics.cb_companies_aliased ............ [RUN]
18:18:15 | 53 of 87 OK created view model analytics.cb_companies_aliased ....... [INSERT 0 1 in 2.13s]
18:18:15 | 54 of 87 START view model analytics.sf_opportunities_xf ............. [RUN]
18:18:16 | 54 of 87 OK created view model analytics.sf_opportunities_xf ........ [INSERT 0 1 in 0.77s]
18:18:16 | 55 of 87 START view model analytics.quickbooks_deposit_transactions . [RUN]
18:18:17 | 55 of 87 OK created view model analytics.quickbooks_deposit_transactions  [CREATE VIEW in 1.01s]
18:18:17 | 56 of 87 START view model analytics.all_months ...................... [RUN]
18:18:18 | 56 of 87 OK created view model analytics.all_months ................. [INSERT 0 1 in 0.77s]
18:18:18 | 57 of 87 START table model analytics.quickbooks_parent_accounts_map . [RUN]
18:18:24 | 57 of 87 OK created table model analytics.quickbooks_parent_accounts_map  [SELECT in 5.98s]
18:18:24 | 58 of 87 START view model analytics.account_segments ................ [RUN]
18:18:25 | 58 of 87 OK created view model analytics.account_segments ........... [INSERT 0 1 in 1.08s]
18:18:25 | 59 of 87 START view model analytics.cb_domains_with_current_info .... [RUN]
18:18:26 | 59 of 87 OK created view model analytics.cb_domains_with_current_info  [INSERT 0 1 in 0.83s]
18:18:26 | 60 of 87 START view model analytics.quickbooks_invoice_transactions . [RUN]
18:18:26 | 60 of 87 OK created view model analytics.quickbooks_invoice_transactions  [CREATE VIEW in 0.49s]
18:18:26 | 61 of 87 START view model analytics.quickbooks_purchase_transactions  [RUN]
18:18:27 | 61 of 87 OK created view model analytics.quickbooks_purchase_transactions  [CREATE VIEW in 1.01s]
18:18:27 | 62 of 87 START view model analytics.transactions_joined ............. [RUN]
18:18:29 | 62 of 87 OK created view model analytics.transactions_joined ........ [INSERT 0 1 in 1.68s]
18:18:29 | 63 of 87 START view model analytics.transactions_corrected .......... [RUN]
18:18:30 | 63 of 87 OK created view model analytics.transactions_corrected ..... [INSERT 0 1 in 0.81s]
18:18:30 | 64 of 87 START view model analytics.transactions_churnable .......... [RUN]
18:18:31 | 64 of 87 OK created view model analytics.transactions_churnable ..... [INSERT 0 1 in 1.13s]
18:18:31 | 65 of 87 START table model analytics.uv_accounts_xf ................. [RUN]
18:18:35 | 65 of 87 OK created table model analytics.uv_accounts_xf ............ [INSERT 0 1 in 4.09s]
18:18:35 | 66 of 87 START view model analytics.account_months .................. [RUN]
18:18:36 | 66 of 87 OK created view model analytics.account_months ............. [INSERT 0 1 in 0.96s]
18:18:36 | 67 of 87 START view model analytics.account_employees ............... [RUN]
18:18:37 | 67 of 87 OK created view model analytics.account_employees .......... [INSERT 0 1 in 0.74s]
18:18:37 | 68 of 87 START view model analytics.transactions_amortized .......... [RUN]
18:18:38 | 68 of 87 OK created view model analytics.transactions_amortized ..... [INSERT 0 1 in 0.98s]
18:18:38 | 69 of 87 START view model analytics.transactions_combined ........... [RUN]
18:18:39 | 69 of 87 OK created view model analytics.transactions_combined ...... [INSERT 0 1 in 0.83s]
18:18:39 | 70 of 87 START view model analytics.transactions_final_churn ........ [RUN]
18:18:40 | 70 of 87 OK created view model analytics.transactions_final_churn ... [INSERT 0 1 in 0.88s]
18:18:40 | 71 of 87 START view model analytics.transactions_typed .............. [RUN]
18:18:41 | 71 of 87 OK created view model analytics.transactions_typed ......... [INSERT 0 1 in 1.19s]
18:18:41 | 72 of 87 START view model analytics.transactions_churned ............ [RUN]
18:18:42 | 72 of 87 OK created view model analytics.transactions_churned ....... [INSERT 0 1 in 1.20s]
18:18:42 | 73 of 87 START table model analytics.quickbooks_general_ledger ...... [RUN]
18:18:46 | 73 of 87 OK created table model analytics.quickbooks_general_ledger . [SELECT in 3.94s]
18:18:46 | 74 of 87 START view model analytics.quickbooks_ledger_xf ............ [RUN]
18:18:47 | 74 of 87 OK created view model analytics.quickbooks_ledger_xf ....... [CREATE VIEW in 0.54s]
18:18:47 | 75 of 87 START view model analytics.quickbooks_days ................. [RUN]
18:18:48 | 75 of 87 OK created view model analytics.quickbooks_days ............ [CREATE VIEW in 1.51s]
18:18:48 | 76 of 87 START view model analytics.quickbooks_months ............... [RUN]
18:18:49 | 76 of 87 OK created view model analytics.quickbooks_months .......... [CREATE VIEW in 0.69s]
18:18:49 | 77 of 87 START view model analytics.quickbooks_toplevel_account_metrics  [RUN]
18:18:50 | 77 of 87 OK created view model analytics.quickbooks_toplevel_account_metrics  [CREATE VIEW in 1.14s]
18:18:50 | 78 of 87 START view model analytics.quickbooks_ledger_cac_categories  [RUN]
18:18:51 | 78 of 87 OK created view model analytics.quickbooks_ledger_cac_categories  [INSERT 0 1 in 0.94s]
18:18:51 | 79 of 87 START view model analytics.quickbooks_ledger_by_month ...... [RUN]
18:18:52 | 79 of 87 OK created view model analytics.quickbooks_ledger_by_month . [CREATE VIEW in 0.82s]
18:18:52 | 80 of 87 START view model analytics.quickbooks_cac_denormalized ..... [RUN]
18:18:54 | 80 of 87 OK created view model analytics.quickbooks_cac_denormalized  [INSERT 0 1 in 1.57s]
18:18:54 | 81 of 87 START view model analytics.quickbooks_toplevel_class_metrics  [RUN]
18:18:54 | 81 of 87 OK created view model analytics.quickbooks_toplevel_class_metrics  [CREATE VIEW in 0.86s]
18:18:55 | 82 of 87 START view model analytics.transactions_enriched ........... [RUN]
18:18:56 | 82 of 87 OK created view model analytics.transactions_enriched ...... [INSERT 0 1 in 1.12s]
18:18:56 | 83 of 87 START table model analytics.transactions ................... [RUN]
18:19:29 | 83 of 87 OK created table model analytics.transactions .............. [INSERT 0 1 in 33.13s]
18:19:29 | 84 of 87 START view model analytics.current_accounts ................ [RUN]
18:19:30 | 84 of 87 OK created view model analytics.current_accounts ........... [INSERT 0 1 in 0.94s]
18:19:30 | 85 of 87 START view model analytics.quickbooks_cac_revenue_splits ... [RUN]
18:19:31 | 85 of 87 OK created view model analytics.quickbooks_cac_revenue_splits  [INSERT 0 1 in 1.09s]
18:19:31 | 86 of 87 START view model analytics.cb_domains_without_current_info . [RUN]
18:19:32 | 86 of 87 OK created view model analytics.cb_domains_without_current_info  [INSERT 0 1 in 0.67s]
18:19:32 | 87 of 87 START view model analytics.quickbooks_cac .................. [RUN]
18:19:33 | 87 of 87 OK created view model analytics.quickbooks_cac ............. [INSERT 0 1 in 1.21s]

18:19:33 | Finished running 87 models
Done. PASS=87 ERROR=0 SKIP=0 TOTAL=87</pre>
	</div>
	<div class="section-body section-body-large section-body-white" ng-if="(run_mode=='notifications')">
		hello logs...
	</div>
</div>
