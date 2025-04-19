/*
 @licstart  The following is the entire license notice for the JavaScript code in this file.

 The MIT License (MIT)

 Copyright (C) 1997-2020 by Dimitri van Heesch

 Permission is hereby granted, free of charge, to any person obtaining a copy of this software
 and associated documentation files (the "Software"), to deal in the Software without restriction,
 including without limitation the rights to use, copy, modify, merge, publish, distribute,
 sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is
 furnished to do so, subject to the following conditions:

 The above copyright notice and this permission notice shall be included in all copies or
 substantial portions of the Software.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING
 BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
 DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

 @licend  The above is the entire license notice for the JavaScript code in this file
*/
var NAVTREE =
[
  [ "embed", "index.html", [
    [ "EmbedOS", "index.html", "index" ],
    [ "co_await Safety", "d2/da0/page_co_await_safety.html", [
      [ "Motivation", "d2/da0/page_co_await_safety.html#section_co_await_safety_motivation", null ],
      [ "The Problem", "d2/da0/page_co_await_safety.html#section_co_await_safety_the_problem", null ],
      [ "Why Not Overload co_await Directly?", "d2/da0/page_co_await_safety.html#section_co_await_safety_why", null ],
      [ "The Solution: embed_await()", "d2/da0/page_co_await_safety.html#section_co_await_safety_the_solution", null ],
      [ "Usage Guidelines", "d2/da0/page_co_await_safety.html#section_co_await_safety_usage_guidelines", null ],
      [ "Example", "d2/da0/page_co_await_safety.html#section_co_await_safety_example", null ]
    ] ],
    [ "Compile Options & Flags", "d0/de7/page_compile_options_and_flags.html", null ],
    [ "Coroutine Execution Model", "d2/d42/page_coroutine_execution_model.html", [
      [ "Overview", "d2/d42/page_coroutine_execution_model.html#section_coroutine_execution_model_overview", null ],
      [ "Roles", "d2/d42/page_coroutine_execution_model.html#section_coroutine_execution_model_roles", [
        [ "Coroutines are only logically nested but physically flat.", "d2/d42/page_coroutine_execution_model.html#autotoc_md20", null ]
      ] ],
      [ "Control Flow", "d2/d42/page_coroutine_execution_model.html#section_coroutine_execution_model_control_flow", null ],
      [ "Handling", "d2/d42/page_coroutine_execution_model.html#section_coroutine_execution_model_handling", null ],
      [ "Coroutine Chain Destruction", "d2/d42/page_coroutine_execution_model.html#section_coroutine_execution_model_coroutine_chain_destruction", null ],
      [ "Core Invariants", "d2/d42/page_coroutine_execution_model.html#section_coroutine_execution_model_core_invariants", null ],
      [ "Analogy", "d2/d42/page_coroutine_execution_model.html#section_coroutine_execution_model_analogy", null ]
    ] ],
    [ "Entangled Future-Promise Pairs", "dd/d10/page_entangled_future_promise_pairs.html", [
      [ "Introduction", "dd/d10/page_entangled_future_promise_pairs.html#section_entangled_future_promise_pairs_introduction", null ],
      [ "Use Case: Asynchronous Data Retrieval", "dd/d10/page_entangled_future_promise_pairs.html#section_entangled_future_promise_pairs_use_case", null ],
      [ "Life Cycle", "dd/d10/page_entangled_future_promise_pairs.html#section_entangled_future_promise_pairs_life_cycle", null ],
      [ "API Summary", "dd/d10/page_entangled_future_promise_pairs.html#section_entangled_future_promise_pairs_api_summary", null ],
      [ "Coroutine Integration", "dd/d10/page_entangled_future_promise_pairs.html#section_entangled_future_promise_pairs_coroutine_integration", null ],
      [ "Teardown Safety", "dd/d10/page_entangled_future_promise_pairs.html#section_entangled_future_promise_pairs_teardown_safety", null ],
      [ "Final Analogy", "dd/d10/page_entangled_future_promise_pairs.html#section_entangled_future_promise_pairs_final_analogy", null ],
      [ "Optimisations", "dd/d10/page_entangled_future_promise_pairs.html#section_entangled_future_promise_pairs_optimisations", null ]
    ] ],
    [ "Exceptions and Assertions", "de/d1c/page_exceptions_and_assertions.html", [
      [ "Philosophy", "de/d1c/page_exceptions_and_assertions.html#page_exceptions_and_assertions_philosophy", null ],
      [ "Customisation", "de/d1c/page_exceptions_and_assertions.html#page_exceptions_and_assertions_customisation", [
        [ "Assertion Levels", "de/d1c/page_exceptions_and_assertions.html#page_exceptions_and_assertions_assertion_levels", null ],
        [ "Turning Assertions into Optimisations", "de/d1c/page_exceptions_and_assertions.html#page_exceptions_and_assertions_optimisations", null ],
        [ "But Be Careful!", "de/d1c/page_exceptions_and_assertions.html#page_exceptions_and_assertions_be_careful", null ]
      ] ],
      [ "How to use Assertion Levels", "de/d1c/page_exceptions_and_assertions.html#page_exceptions_and_assertions_usage", null ],
      [ "Redirect assertions from exceptions to callbacks", "de/d1c/page_exceptions_and_assertions.html#page_exceptions_and_assertions_callbacks", null ],
      [ "Disable all checks and assertions", "de/d1c/page_exceptions_and_assertions.html#page_exceptions_and_assertions_disable", null ],
      [ "Defining Custom Exceptions", "de/d1c/page_exceptions_and_assertions.html#page_exceptions_and_assertions_custom_exceptions", null ]
    ] ],
    [ "Getting Started", "d1/d66/getting_started.html", "d1/d66/getting_started" ],
    [ "Overflow aware: Clocks, Time-Points and Durations", "d8/dd3/page_overflow_aware_clocks.html", [
      [ "Overflow Awareness", "d8/dd3/page_overflow_aware_clocks.html#page_overflow_aware_clocks_overflow_awareness", null ],
      [ "Integration with <chrono>", "d8/dd3/page_overflow_aware_clocks.html#page_overflow_aware_clocks_overflow_integration_with_stdchrono", null ],
      [ "Example: Creating Your Own Clock", "d8/dd3/page_overflow_aware_clocks.html#page_overflow_aware_clocks_overflow_awareness_example", null ],
      [ "Why Use This?", "d8/dd3/page_overflow_aware_clocks.html#page_overflow_aware_clocks_overflow_awareness_why", null ],
      [ "Summary", "d8/dd3/page_overflow_aware_clocks.html#page_overflow_aware_clocks_summary", null ]
    ] ],
    [ "System Stubs: Wrappers for Embedded Binary Size Reduction", "d9/d9d/embed_sys_stubs.html", [
      [ "Overview", "d9/d9d/embed_sys_stubs.html#overview", null ],
      [ "Usage Example", "d9/d9d/embed_sys_stubs.html#cmake_usage", null ],
      [ "It Works", "d9/d9d/embed_sys_stubs.html#How", null ],
      [ "Results and Measured Impact", "d9/d9d/embed_sys_stubs.html#results", null ],
      [ "Summary", "d9/d9d/embed_sys_stubs.html#summary", null ]
    ] ],
    [ "Namespaces", "namespaces.html", [
      [ "Namespace List", "namespaces.html", "namespaces_dup" ],
      [ "Namespace Members", "namespacemembers.html", [
        [ "All", "namespacemembers.html", "namespacemembers_dup" ],
        [ "Functions", "namespacemembers_func.html", null ],
        [ "Variables", "namespacemembers_vars.html", null ],
        [ "Typedefs", "namespacemembers_type.html", null ],
        [ "Enumerations", "namespacemembers_enum.html", null ]
      ] ]
    ] ],
    [ "Concepts", "concepts.html", "concepts" ],
    [ "Classes", "annotated.html", [
      [ "Class List", "annotated.html", "annotated_dup" ],
      [ "Class Index", "classes.html", null ],
      [ "Class Hierarchy", "hierarchy.html", "hierarchy" ],
      [ "Class Members", "functions.html", [
        [ "All", "functions.html", "functions_dup" ],
        [ "Functions", "functions_func.html", "functions_func" ],
        [ "Variables", "functions_vars.html", null ],
        [ "Typedefs", "functions_type.html", null ],
        [ "Enumerations", "functions_enum.html", null ],
        [ "Related Symbols", "functions_rela.html", null ]
      ] ]
    ] ],
    [ "Files", "files.html", [
      [ "File List", "files.html", "files_dup" ],
      [ "File Members", "globals.html", [
        [ "All", "globals.html", null ],
        [ "Functions", "globals_func.html", null ],
        [ "Macros", "globals_defs.html", null ]
      ] ]
    ] ]
  ] ]
];

var NAVTREEINDEX =
[
"annotated.html",
"d1/de2/classembed_1_1_array_list.html#a5bbd247058d13fad6c1ae7470507d7de",
"d2/d0d/classembed_1_1_dual_array_list.html#a8795a07ddd1774d98b1f74f51963f8af",
"d2/d32/classembed_1_1_left_dual_array_list.html#a71a3ade5158206717581171c6b801260",
"d4/db1/classembed_1_1_priority_queue.html#a944d81b98232ac250bf24d9767f66589",
"d7/d79/_dual_priority_queue_8hpp.html",
"d8/d46/classembed_1_1_co_task.html#a9d45b527ff350ad80b8f5e05cdf2707f",
"da/d2e/namespaceembed.html#a7ab11d61ef63b9de6cde01fecf32902e",
"dd/d4c/classembed_1_1_coroutine_promise.html#abed0fe1945ec5c34cdcf337ffa7fd17a",
"index.html#autotoc_md6"
];

var SYNCONMSG = 'click to disable panel synchronization';
var SYNCOFFMSG = 'click to enable panel synchronization';