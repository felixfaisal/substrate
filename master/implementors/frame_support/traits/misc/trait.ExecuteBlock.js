(function() {var implementors = {};
implementors["frame_executive"] = [{"text":"impl&lt;System:&nbsp;<a class=\"trait\" href=\"frame_system/pallet/trait.Config.html\" title=\"trait frame_system::pallet::Config\">Config</a> + <a class=\"trait\" href=\"frame_support/traits/misc/trait.EnsureInherentsAreFirst.html\" title=\"trait frame_support::traits::misc::EnsureInherentsAreFirst\">EnsureInherentsAreFirst</a>&lt;Block&gt;, Block:&nbsp;<a class=\"trait\" href=\"sp_runtime/traits/trait.Block.html\" title=\"trait sp_runtime::traits::Block\">Block</a>&lt;Header = System::<a class=\"associatedtype\" href=\"frame_system/pallet/trait.Config.html#associatedtype.Header\" title=\"type frame_system::pallet::Config::Header\">Header</a>, Hash = System::<a class=\"associatedtype\" href=\"frame_system/pallet/trait.Config.html#associatedtype.Hash\" title=\"type frame_system::pallet::Config::Hash\">Hash</a>&gt;, Context:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a>, UnsignedValidator, AllPalletsWithSystem:&nbsp;<a class=\"trait\" href=\"frame_support/traits/hooks/trait.OnRuntimeUpgrade.html\" title=\"trait frame_support::traits::hooks::OnRuntimeUpgrade\">OnRuntimeUpgrade</a> + <a class=\"trait\" href=\"frame_support/traits/hooks/trait.OnInitialize.html\" title=\"trait frame_support::traits::hooks::OnInitialize\">OnInitialize</a>&lt;System::<a class=\"associatedtype\" href=\"frame_system/pallet/trait.Config.html#associatedtype.BlockNumber\" title=\"type frame_system::pallet::Config::BlockNumber\">BlockNumber</a>&gt; + <a class=\"trait\" href=\"frame_support/traits/hooks/trait.OnIdle.html\" title=\"trait frame_support::traits::hooks::OnIdle\">OnIdle</a>&lt;System::<a class=\"associatedtype\" href=\"frame_system/pallet/trait.Config.html#associatedtype.BlockNumber\" title=\"type frame_system::pallet::Config::BlockNumber\">BlockNumber</a>&gt; + <a class=\"trait\" href=\"frame_support/traits/hooks/trait.OnFinalize.html\" title=\"trait frame_support::traits::hooks::OnFinalize\">OnFinalize</a>&lt;System::<a class=\"associatedtype\" href=\"frame_system/pallet/trait.Config.html#associatedtype.BlockNumber\" title=\"type frame_system::pallet::Config::BlockNumber\">BlockNumber</a>&gt; + <a class=\"trait\" href=\"frame_support/traits/misc/trait.OffchainWorker.html\" title=\"trait frame_support::traits::misc::OffchainWorker\">OffchainWorker</a>&lt;System::<a class=\"associatedtype\" href=\"frame_system/pallet/trait.Config.html#associatedtype.BlockNumber\" title=\"type frame_system::pallet::Config::BlockNumber\">BlockNumber</a>&gt;, COnRuntimeUpgrade:&nbsp;<a class=\"trait\" href=\"frame_support/traits/hooks/trait.OnRuntimeUpgrade.html\" title=\"trait frame_support::traits::hooks::OnRuntimeUpgrade\">OnRuntimeUpgrade</a>&gt; <a class=\"trait\" href=\"frame_support/traits/misc/trait.ExecuteBlock.html\" title=\"trait frame_support::traits::misc::ExecuteBlock\">ExecuteBlock</a>&lt;Block&gt; for <a class=\"struct\" href=\"frame_executive/struct.Executive.html\" title=\"struct frame_executive::Executive\">Executive</a>&lt;System, Block, Context, UnsignedValidator, AllPalletsWithSystem, COnRuntimeUpgrade&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;Block::<a class=\"associatedtype\" href=\"sp_runtime/traits/trait.Block.html#associatedtype.Extrinsic\" title=\"type sp_runtime::traits::Block::Extrinsic\">Extrinsic</a>: <a class=\"trait\" href=\"sp_runtime/traits/trait.Checkable.html\" title=\"trait sp_runtime::traits::Checkable\">Checkable</a>&lt;Context&gt; + Codec,<br>&nbsp;&nbsp;&nbsp;&nbsp;<a class=\"type\" href=\"frame_executive/type.CheckedOf.html\" title=\"type frame_executive::CheckedOf\">CheckedOf</a>&lt;Block::<a class=\"associatedtype\" href=\"sp_runtime/traits/trait.Block.html#associatedtype.Extrinsic\" title=\"type sp_runtime::traits::Block::Extrinsic\">Extrinsic</a>, Context&gt;: <a class=\"trait\" href=\"sp_runtime/traits/trait.Applyable.html\" title=\"trait sp_runtime::traits::Applyable\">Applyable</a> + <a class=\"trait\" href=\"frame_support/weights/trait.GetDispatchInfo.html\" title=\"trait frame_support::weights::GetDispatchInfo\">GetDispatchInfo</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;<a class=\"type\" href=\"frame_executive/type.CallOf.html\" title=\"type frame_executive::CallOf\">CallOf</a>&lt;Block::<a class=\"associatedtype\" href=\"sp_runtime/traits/trait.Block.html#associatedtype.Extrinsic\" title=\"type sp_runtime::traits::Block::Extrinsic\">Extrinsic</a>, Context&gt;: <a class=\"trait\" href=\"sp_runtime/traits/trait.Dispatchable.html\" title=\"trait sp_runtime::traits::Dispatchable\">Dispatchable</a>&lt;Info = <a class=\"struct\" href=\"frame_support/weights/struct.DispatchInfo.html\" title=\"struct frame_support::weights::DispatchInfo\">DispatchInfo</a>, PostInfo = <a class=\"struct\" href=\"frame_support/weights/struct.PostDispatchInfo.html\" title=\"struct frame_support::weights::PostDispatchInfo\">PostDispatchInfo</a>&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;<a class=\"type\" href=\"frame_executive/type.OriginOf.html\" title=\"type frame_executive::OriginOf\">OriginOf</a>&lt;Block::<a class=\"associatedtype\" href=\"sp_runtime/traits/trait.Block.html#associatedtype.Extrinsic\" title=\"type sp_runtime::traits::Block::Extrinsic\">Extrinsic</a>, Context&gt;: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;System::<a class=\"associatedtype\" href=\"frame_system/pallet/trait.Config.html#associatedtype.AccountId\" title=\"type frame_system::pallet::Config::AccountId\">AccountId</a>&gt;&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;UnsignedValidator: <a class=\"trait\" href=\"sp_runtime/traits/trait.ValidateUnsigned.html\" title=\"trait sp_runtime::traits::ValidateUnsigned\">ValidateUnsigned</a>&lt;Call = <a class=\"type\" href=\"frame_executive/type.CallOf.html\" title=\"type frame_executive::CallOf\">CallOf</a>&lt;Block::<a class=\"associatedtype\" href=\"sp_runtime/traits/trait.Block.html#associatedtype.Extrinsic\" title=\"type sp_runtime::traits::Block::Extrinsic\">Extrinsic</a>, Context&gt;&gt;,&nbsp;</span>","synthetic":false,"types":["frame_executive::Executive"]}];
implementors["substrate_test_runtime"] = [{"text":"impl <a class=\"trait\" href=\"frame_support/traits/misc/trait.ExecuteBlock.html\" title=\"trait frame_support::traits::misc::ExecuteBlock\">ExecuteBlock</a>&lt;<a class=\"struct\" href=\"sp_runtime/generic/block/struct.Block.html\" title=\"struct sp_runtime::generic::block::Block\">Block</a>&lt;<a class=\"struct\" href=\"sp_runtime/generic/header/struct.Header.html\" title=\"struct sp_runtime::generic::header::Header\">Header</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.u64.html\">u64</a>, <a class=\"struct\" href=\"sp_runtime/traits/struct.BlakeTwo256.html\" title=\"struct sp_runtime::traits::BlakeTwo256\">BlakeTwo256</a>&gt;, <a class=\"enum\" href=\"substrate_test_runtime/enum.Extrinsic.html\" title=\"enum substrate_test_runtime::Extrinsic\">Extrinsic</a>&gt;&gt; for <a class=\"struct\" href=\"substrate_test_runtime/system/struct.BlockExecutor.html\" title=\"struct substrate_test_runtime::system::BlockExecutor\">BlockExecutor</a>","synthetic":false,"types":["substrate_test_runtime::system::BlockExecutor"]}];
if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()